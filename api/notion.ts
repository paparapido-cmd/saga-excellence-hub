import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");

  const { type, slug } = req.query;

  const NOTION_TOKEN = process.env.NOTION_TOKEN;
  const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

  if (!NOTION_TOKEN || !NOTION_DATABASE_ID) {
    return res.status(500).json({ error: "Missing Notion credentials" });
  }

  if (type === "posts") {
    const response = await fetch(
      `https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${NOTION_TOKEN}`,
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filter: {
            property: "Published",
            checkbox: { equals: true },
          },
          sorts: [{ property: "Date", direction: "descending" }],
        }),
      }
    );

    const data = await response.json();

    const posts = data.results.map((page: any) => ({
      id: page.id,
      slug: page.properties.Slug?.rich_text?.[0]?.plain_text || "",
      title: page.properties.Title?.title?.[0]?.plain_text || "",
      excerpt: page.properties.Excerpt?.rich_text?.[0]?.plain_text || "",
      date: page.properties.Date?.date?.start || "",
      category: page.properties.Category?.select?.name || "",
      readTime: page.properties.ReadTime?.rich_text?.[0]?.plain_text || "5 min read",
    }));

    return res.status(200).json(posts);
  }

  if (type === "post" && slug) {
    const response = await fetch(
      `https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${NOTION_TOKEN}`,
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filter: {
            property: "Slug",
            rich_text: { equals: slug as string },
          },
        }),
      }
    );

    const data = await response.json();
    const page = data.results[0];

    if (!page) {
      return res.status(404).json({ error: "Post not found" });
    }

    const blocksResponse = await fetch(
      `https://api.notion.com/v1/blocks/${page.id}/children`,
      {
        headers: {
          Authorization: `Bearer ${NOTION_TOKEN}`,
          "Notion-Version": "2022-06-28",
        },
      }
    );

    const blocksData = await blocksResponse.json();

    const content = blocksData.results
      .map((block: any) => {
        const text = block[block.type]?.rich_text
          ?.map((t: any) => t.plain_text)
          .join("") || "";

        if (block.type === "heading_1") return `<h1>${text}</h1>`;
        if (block.type === "heading_2") return `<h2>${text}</h2>`;
        if (block.type === "heading_3") return `<h3>${text}</h3>`;
        if (block.type === "paragraph") return text ? `<p>${text}</p>` : "";
        if (block.type === "bulleted_list_item") return `<li>${text}</li>`;
        return "";
      })
      .join("\n");

    const post = {
      id: page.id,
      slug: page.properties.Slug?.rich_text?.[0]?.plain_text || "",
      title: page.properties.Title?.title?.[0]?.plain_text || "",
      date: page.properties.Date?.date?.start || "",
      category: page.properties.Category?.select?.name || "",
      readTime: page.properties.ReadTime?.rich_text?.[0]?.plain_text || "5 min read",
      content,
    };

    return res.status(200).json(post);
  }

  return res.status(400).json({ error: "Invalid request" });
}

import Instagram from "instagram-web-api"

const client = new Instagram({ username: process.env.INSTAGRAM_USER, password: process.env.INSTAGRAM_PASSWORD });

export async function fetchSocialMedia() {
    await client.login();
    const data = await client.getPhotosByUsername({username: process.env.INSTAGRAM_USER, first:10, after:"" });
    return data.user.edge_owner_to_timeline_media.edges;
}

export async function fetchContent(query, preview) {
  const res = await fetch(
    `https://strapi.sir-ivan.com/${query}${
      preview ? "?_publicationState=preview" : ""
    }`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }
  );
 
  const data = await res.json();

  return data;
}

export async function fetchContentBySlug(query, slug, preview) {
  const res = await fetch(
    `https://strapi.sir-ivan.com/${query}?slug=${slug}${
      preview ? "?_publicationState=preview" : ""
    }`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }
  );
  const data = await res.json();
  return data;
}



/*
export async function downloadImage(imagePath){


  
  const response = await fetch(`https://strapi.sir-ivan.com${imagePath}`, {
    method: "GET",
    headers: {"content-type": "application/json"},
  })
  
  const buffer = await response.buffer();
  console.log(imagePath)
  const slug = imagePath.split('/').pop(); // 2020
  console.log(slug)

  fs.writeFile(`./public/downloads/${slug}`, buffer, () => 
    console.log('finished downloading!'));
}
*/
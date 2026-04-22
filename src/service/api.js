import backup from "../assets/backup.jpeg";

export async function fetchProjects() {
  try {
    const API_KEY = "XY0Bt7jD8TuYzSzzNwhM4liW09FcsyHIRwcNdxyL"; // não consegui criar o .env... mas aqui não é o local seguro e confiavel de por a chave da API

    const res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=5`
    );

    if (!res.ok) {
      console.log("API indisponível, usando backup...");

      return [
        {
          id: 1,
          title: "Nebulosa - Backup 🚀",
          image: backup,
          description: "Imagem de backup (API fora do ar)",
          media_type: "image",
        },
      ];
    }

    const data = await res.json();

    return data.map((item, i) => ({
      id: i,
      title: item.title,
      image: item.url,
      description: item.explanation,
      media_type: item.media_type,
    }));

  } catch (error) {
    console.log("Erro geral:", error);

    return [
      {
        id: 1,
        title: "Fallback 🚀",
        image: backup,
        description: "Erro na API",
        media_type: "image",
      },
    ];
  }
}

export async function fetchByDate(date) {
  try {
    const API_KEY = "XY0Bt7jD8TuYzSzzNwhM4liW09FcsyHIRwcNdxyL";

    const res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`
    );

    if (!res.ok) return [];

    const data = await res.json();

    return [
      {
        id: 1,
        title: data.title,
        image: data.url,
        description: data.explanation,
        media_type: data.media_type,
      },
    ];
  } catch (error) {
    console.log(error);
    return [];
  }
}
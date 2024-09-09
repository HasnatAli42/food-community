interface IParams {
  params: { slug: string };
}

export default function BlogPostPage({ params }: IParams) {
  return (
    <main>
      <h1>Blog Post</h1>
      <p>{params.slug}</p>
    </main>
  );
}

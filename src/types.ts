interface PostData {
  slug: string;
  title: string;
  category: string;
  headerImage: string;
  snippet: string;
}

interface Post {
  data: PostData;
}

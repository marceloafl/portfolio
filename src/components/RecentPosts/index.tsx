import PostList from "../PostList";
import BaseSection from "../Section";

export default function RecentPosts(){
  const sectionTitle = "Posts recentes";
  const blogHref = "https://medium.com/@marceloafl";

  return (
    <BaseSection title={sectionTitle}>
      <PostList />
    </BaseSection>
  )
}
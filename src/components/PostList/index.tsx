import * as S from "./styles";
import { kaiseiDecol, openSans } from "../../theme/styles/font";
import { posts } from "./Posts";

export default function PostList() {

  function showTextSummary(text: string) {
    return text.replace(text.substring(93, text.length), '...');;
  }

  return (
    <>
      {posts.reverse().map((post) => (
        <S.PostLink key={post.id} href={post.href} target="_blank">
          <>
            <h3 style={openSans.style}>{post.title}</h3>
            <p style={openSans.style}>{showTextSummary(post.text)}</p>
            <div>
              <p style={openSans.style}>Ler mais</p>
            </div>
          </>
        </S.PostLink>
      ))}
    </>
  );
}

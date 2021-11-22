import RichTextPageContent from "@components/RichTextPageContent";
import RichTextPageContentStyles from "../RichTextPageContent/RichTextPageContent.module.scss";

export default function Post(props) {
  const { post } = props;
  
  return (
    <article className={RichTextPageContentStyles.page}>
      <RichTextPageContent richTextBodyField={post.body} renderH2Links={true} />
    </article>
  );
}
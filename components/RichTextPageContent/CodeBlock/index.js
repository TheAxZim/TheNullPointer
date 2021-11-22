import CodeBlockStyles from "./CodeBlock.module.css";
import Prism from "prismjs";
import { useEffect } from "react";

export default function CodeBlock(props) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const { language, code } = props;

  return (
    <pre className={`language-${language} ${CodeBlockStyles.codeBlock}`}>
      <code className={CodeBlockStyles.codeBlock__inner}>{code}</code>
    </pre>
  );
}
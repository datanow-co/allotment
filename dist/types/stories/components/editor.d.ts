import "@vscode/codicons/dist/codicon.css";
import { Document } from "./app";
export type EditorProps = {
    documents: Document[];
    onDocumentsChange: (documents: Document[]) => void;
};
export declare const Editor: ({ documents, onDocumentsChange }: EditorProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=editor.d.ts.map
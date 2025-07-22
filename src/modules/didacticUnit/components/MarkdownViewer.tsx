export const markdownComponents = {
  h1: ({ children }: { children?: React.ReactNode }) => <h1>{children}</h1>,
  h2: ({ children }: { children?: React.ReactNode }) => <h2>{children}</h2>,
  h3: ({ children }: { children?: React.ReactNode }) => <h3>{children}</h3>,
  table: ({ children }: { children?: React.ReactNode }) => <table>{children}</table>,
  tr: ({ children }: { children?: React.ReactNode }) => <tr>{children}</tr>,
  td: ({ children }: { children?: React.ReactNode }) => <td>{children}</td>,
  th: ({ children }: { children?: React.ReactNode }) => <th>{children}</th>,
  ul: ({ children }: { children?: React.ReactNode }) => <ul>{children}</ul>,
  ol: ({ children }: { children?: React.ReactNode }) => <ol>{children}</ol>,
  li: ({ children }: { children?: React.ReactNode }) => <li>{children}</li>,
  blockquote: ({ children }: { children?: React.ReactNode }) => <blockquote>{children}</blockquote>,
  p: ({ children }: { children?: React.ReactNode }) => <p>{children}</p>,
}
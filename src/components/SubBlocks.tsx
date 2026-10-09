import type { Block } from '../data/subpages';

/** Renders `section.blocks` for the current section. */
export function SubBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'P':
            return (
              <p key={i} className="sub-p">
                {block.text}
              </p>
            );
          case 'List':
            return (
              <ul key={i} className="sub-sec__list">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case 'Steps':
            return (
              <ol key={i} className="sub-steps">
                {block.items.map((item, n) => (
                  <li key={item} className="sub-steps__item">
                    <span className="sub-steps__n">{n + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            );
          case 'Table':
            return (
              <div
                key={i}
                className="sub-table-wrap"
                role="region"
                aria-label="Table"
                tabIndex={0}
              >
                <table className="sub-table">
                  <thead>
                    <tr>
                      {block.head.map((cell) => (
                        <th key={cell} scope="col">
                          {cell}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, r) => (
                      <tr key={r}>
                        {row.map((cell, c) => (
                          <td key={c}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case 'Quote':
            return (
              <blockquote key={i} className="sub-quote">
                <p>{block.text}</p>
              </blockquote>
            );
          case 'Note':
            return (
              <aside key={i} className="sub-note">
                {block.text}
              </aside>
            );
          default:
            return null;
        }
      })}
    </>
  );
}

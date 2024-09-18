declare namespace JSX {
    interface IntrinsicElements {
      'l-grid': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        size?: string;
        color?: string;
      };
    }
  }
  
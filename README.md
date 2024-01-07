## Modaltic (Artistic `tic`)

![ReactJs](https://img.shields.io/badge/language-React.Js-blue.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

Always rewriting the same code for modal. Let's try an UI library. That's give more control on the UI with prebuild tools.


## Usage

Add this package to your project.

```bash
pnpm install modaltic
```

### Setup Layout:

Replace your layout page with this code.

```ts
# app/layout.tsx;
import { ModalticProvider } from "modaltic";
import "modaltic/styles.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <ModalticProvider theme="light">
          {children}
        </ModalticProvider>
      </body>
    </html>
  );
}
```

### Show Model

```ts
"use client";
import React from "react";
import { useModaltic } from "modaltic";
import { CustomForm } from "../components";

export default function HomePage() {
  const modaltic = useModaltic();

  const handleShowDetails = () => {
    modaltic.show("customForm", CustomForm());
  };

  return (
    <div className="card">
      <h4 className="cardTitle">I can do this</h4>
      <button className="cardButton" onClick={handleShowDetails}>
        See more
      </button>
    </div>
  );
}
```

## Custom Styling for Model

We have some `css` variable. That's help you to change the color and apperance of the model.

- `--modaltic`: Primary color of the modal.
- `--modaltic-2nd`: Secondary color of the modal.
- `--modaltic-shadow`: Shadow color of the modal.
- `--modaltic-padding`: Padding inside the modal.
- `--modaltic-z-index`: Z-Index of the modal.

### Sizes

```css
.modaltic {
  --modalx-padding: 4rem 1rem;
  --modalx-z-index: 10;
}
```

### Theme

Our default theme mode is `dark`. You can change the theme mode by adding this class `.modaltic-light`.

```css
/* on dark mode */
.modaltic {
  --modaltic: hsl(219, 32%, 12%);
  --modaltic-2nd: hsl(219, 8%, 75%);
  --modaltic-shadow: rgba(0, 0, 0, 0.5);
}

/* on light mode */
.modaltic-light {
  --modaltic: hsl(219, 100%, 99%);
  --modaltic-2nd: hsl(219, 8%, 50%);
  --modaltic-shadow: rgba(0, 0, 0, 0.1);
}
```

## Contributing

Contributions are welcome! I would like you to contribute in this project.

## Roadmap

This project is in its early stages, and there are many missing features that need implementation. Check the [Issues](/issues) section for a list of features, enhancements, and bug fixes that are planned.

## License

This project is licensed under the MIT License - see the [LICENSE](/LICENSE.md) file for details.
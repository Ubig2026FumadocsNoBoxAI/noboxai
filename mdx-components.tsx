import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    iframe: (props: any) => {
      const { width, height, style, className, ...cleanProps } = props;
      return (
        <div
          className="w-full my-8 overflow-hidden rounded-2xl border bg-muted shadow-lg"
          style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}
        >
          <iframe
            {...cleanProps}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: 0,
            }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      );
    },
    img: (props) => (
      <ImageZoom
        {...(props as any)}
        className="rounded-xl border shadow-md my-6"
      />
    ),
    ...components,
  };
}

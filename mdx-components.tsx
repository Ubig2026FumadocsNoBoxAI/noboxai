import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { cn } from "@/lib/utils";

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
    img: (props) => {
      const isInline =
        props.className?.includes("inline") ||
        (props as any).style?.display === "inline" ||
        (props.width && Number(props.width) <= 64);

      if (isInline) {
        return (
          <img
            {...(props as any)}
            className={cn(
              "inline-block align-middle m-0 rounded-none shadow-none border-none",
              props.className
            )}
          />
        );
      }

      return (
        <ImageZoom
          {...(props as any)}
          className={cn(
            "rounded-lg border shadow-sm mb-4 my-8 ",
            props.className
          )}
        />
      );
    },
    ...components,
  };
}

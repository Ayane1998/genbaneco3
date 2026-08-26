"use client";

import Giscus from "@giscus/react";

export default function GiscusComments() {
  return (
    <div className="mt-16">
      <Giscus
        repo="Ayane1998/genbaneco3"
        repoId="R_kgDOPcXgzw"
        category="Announcements"
        categoryId="DIC_kwDOPcXgz84DENA5"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="preferred_color_scheme"
        lang="ja"
        loading="lazy"
      />
    </div>
  );
}
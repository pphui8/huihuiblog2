"use client";

import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>huihuiblog</title>
        <meta
          name="keywords"
          content="huihuiblog,pphui8,pphui,Jinhui,湫月汐,个人网站,网站主页,博客主页"
        />
        <meta name="description" content="pphui8的blog" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}

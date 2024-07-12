import React from "react";

export function catApi() {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState();

  React.useEffect(() => {
    handleRequest();
  }, []);

  async function handleRequest() {
    const resp = await fetch("https://cataas.com/api/cats?tags=cute");
    const list = await resp.json();
    const images = list.map((it: any) => it._id);
    setData(images);
    setLoading(false);
  }

  return { data, loading };
}

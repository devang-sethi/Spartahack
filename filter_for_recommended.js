  const response = await fetch("listing.json");
  const listing_list = await response.json();
  listing_recs = res1 = jsonPath(o, "$..author").toJSONString(),

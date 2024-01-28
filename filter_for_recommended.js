
import { jsonPath } from './jsonpath-0.8.0.js';

const response = await fetch("listing.json");
const listing_list = await response.json();
listing_recs = jsonPath(listing_list, "$.Listing[:3]").toJSONString();
let return_obj = new Response(listingrecs);
return return_obj;

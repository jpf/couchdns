function(head, req) {
  // comment?
  var seen = new Array();
  var domains = new Array();
  while (row = getRow()) {
    name = row.key.split('/')[0];
    if(seen[name]) { continue; }
    domains.push(name);
    seen[name] = true;
  }
  send(JSON.stringify(domains));
}

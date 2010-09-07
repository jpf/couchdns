function(doc, req) {  
  var rv = new Object();
  rv.header     = doc.header;
  rv.question   = doc.question;
  rv.answer     = doc.answer;
  rv.authority  = doc.authority;
  rv.additional = doc.additional;
  return JSON.stringify(rv);
}

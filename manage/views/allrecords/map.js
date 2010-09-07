function(doc) {
  if(doc._id.indexOf('/') > 0) {
    emit(doc._id);
  }
}

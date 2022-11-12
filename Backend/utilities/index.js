const getUniqeItems = (itmes , target) => {
    var unique = [];
    var distinct = [];
    for( let i = 0; i < itmes.length; i++ ){
      if( !unique[itmes[i][target]]){
        distinct.push(itmes[i][target]);
        unique[itmes[i][target]] = 1;
      }
    }

    return distinct
}

module.exports = {
    getUniqeItems
};
  
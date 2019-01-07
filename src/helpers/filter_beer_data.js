const filterBeerDataByTaplist = (data, list) => data.filter(item => list.indexOf(item.id) === -1);

export default filterBeerDataByTaplist;

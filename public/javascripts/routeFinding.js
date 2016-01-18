
// a dummy function for developing the UI 

function findRoute(fromStop, toStop, time){
  //route is an array of trips
  var route = [];
  
  route = [{},{}];
  
  route[0].type = 2; //metro
  route[0].stop1 = 1040106; //using the stop_id; (kamppi ( M))
  route[0].stop2 = 1113131; //sörnäinen (M)
  route[0].startTime =  "09:50:00";
  route[0].endTime = "10:00:00";
  
  route[1].type = 1; //tram
  route[1].stop1 =1040106; //sörnäinen  
  route[1].stop2 = 1240418 //kyläsaarenkatu
  route[1].startTime = "10:05:00";
  route[1].endTime = "10:20:00";
  
  return route;
}

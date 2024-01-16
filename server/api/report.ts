export default defineEventHandler(async (event) => {
  const data = await fetch('http://backend:8000/api/report') 
  return data
})
  
  // // await new Promise(r => setTimeout(r,2000));
  //   return {
  //       message:"ok",
  //     items: [  {
  //       name: 'Frozen Yogurt',
  //       calories: 159,
  //     },
  //     {
  //       name: 'Ice cream sandwich',
  //       calories: 237,
  //     },]
  //   }
  // })
export default defineEventHandler(async (event) => {
    // await new Promise(r => setTimeout(r,2000));
    return {
        message:"ok",
      items: [  {
        name: 'Frozen Yogurt',
        calories: 159,
      },
      {
        name: 'Ice cream sandwich',
        calories: 237,
      },]
    }
  })
// برای اینکه کدهای ما تمیزتر باشد عملیات فچ کردن را در این فایل انجام میدهیم و هرجا خواستیم آنرا ایمپورت میکنیم

const fethData = async ()=>{
    const res = await fetch("data.json");
    const json = await res.json();
    return json;
};

export{fethData}
exports.getRow = (rate)=>{
    return {
        value: parseFloat(rate.value.N), 
        unit: rate.unit.S, 
        term: rate.term.S, 
        period: rate.period.S,
        description: rate.description.S,
        id: rate.id.S,
        type: rate.type.S,
      };
}
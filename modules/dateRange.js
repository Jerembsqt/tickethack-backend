const {DateTime} = require('luxon')

//helper luxon pour avoir la date dans le fuseau Europe/Paris
    function dayRange(dateStr) {
      const start = DateTime.fromFormat(dateStr, 'dd-MM-yyyy', { zone: 'Europe/Paris' }).startOf('day');
      return { start: start.toJSDate(), end: start.plus({ days: 1 }).toJSDate() };
    };

    module.exports = {dayRange}
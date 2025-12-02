const express = require('express');
const app = express();

app.listen(PORT, '0.0.0.0', () => console.log(`Server running on ${PORT}`));
module.exports = app; // サーバーは起動しない


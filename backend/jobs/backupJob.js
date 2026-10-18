// Exemplo: agendamento de backup do banco de dados
const cron = require('node-cron');
const { exec } = require('child_process');

cron.schedule('0 3 * * *', () => {
  exec('mongodump --uri="MONGO_URI" --out=./storage/backups/$(date +%F)', (error, stdout, stderr) => {
    if (error) console.log('Erro no backup:', error);
    else console.log('Backup realizado com sucesso!');
  });
});
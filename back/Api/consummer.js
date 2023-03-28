const amqp = require('amqplib');

async function consume() {
  try {
    // Conectarse a RabbitMQ
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();

    // Crear la cola "tyh" si no existe
    const queue = 'tyh';
    await channel.assertQueue(queue, { durable: false });

    // Consumir los mensajes de la cola "tyh"
    console.log(`Esperando mensajes en la cola "${queue}"...`);
    channel.consume(queue, (msg) => {
      console.log(`Recibido: ${msg.content.toString()}`);
    }, { noAck: true });
  } catch (error) {
    console.error(error);
  }
}

consume();

import React, { useEffect, useState } from 'react';
import amqp from 'amqp-connection-manager';

function ConnectionRabbitMQ({ exchange }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const connectToRabbitMQ = async () => {
      const connection = await amqp.connect('amqps://fmvuaato:rf8WI8vTryL7n8t0ytED8VYTQ1yHd_Mp@shark.rmq.cloudamqp.com/fmvuaato');
      const channel = await connection.createChannel();
      await channel.assertExchange(exchange, 'fanout', { durable: false });
      const queue = await channel.assertQueue('', { exclusive: true });
      await channel.bindQueue(queue.queue, exchange, '');

      console.log('Conectado a RabbitMQ');
      channel.consume(queue.queue, message => {
        console.log('Mensaje recibido:', message.content.toString());
        setMessages(prevMessages => [...prevMessages, message.content.toString()]);
      }, { noAck: true });
    };

    connectToRabbitMQ();

    return () => {
      // Cerrar la conexión cuando se desmonte el componente
      connection.close();
    };
  }, [exchange]);

  return (
    <div>
      <h2>Mensajes entrantes:</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
}

export default ConnectionRabbitMQ;
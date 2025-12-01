import axios from 'axios';

export class APIClient {
  constructor(private baseUrl: string) {}

  async sendMessage(message: string) {
    try {
      const res = await axios.post(
        `${this.baseUrl}/agent/respond`,
        { message },
        {
          validateStatus: () => true, // 👈 evita que Axios lance errores
        }
      );

      return {
        status: res.status,
        data: res.data,
      };
    } catch (err) {
      return {
        status: 500,
        data: { error: 'Unexpected error' },
      };
    }
  }
}

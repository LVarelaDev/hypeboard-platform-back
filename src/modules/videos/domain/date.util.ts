export class DateUtil {
  static getRelativeTime(dateString: string): string {
    const now = new Date();
    const published = new Date(dateString);

    const diffMs = now.getTime() - published.getTime();

    const minutes = Math.floor(diffMs / (1000 * 60));
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);

    if (months > 0) return `Hace ${months} mes(es)`;
    if (days > 0) return `Hace ${days} día(s)`;
    if (hours > 0) return `Hace ${hours} hora(s)`;
    return `Hace ${minutes} minuto(s)`;
  }
}

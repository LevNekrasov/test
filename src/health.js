// eslint-disable-next-line consistent-return, no-unused-vars
export default function healthScale({ name, health }) {
  if (health < 0) {
    return 'error';
  }
  if (health > 50) {
    return 'healthy';
  }
  if (health <= 50 && health >= 15) {
    return 'wounded';
  }
  if (health < 15) {
    return 'critical';
  }
}

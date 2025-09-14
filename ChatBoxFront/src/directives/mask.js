export default {
  mounted(el, binding) {
    const mask = binding.value; 
    
    function format(v) {
      let value = v.replace(/\D/g, '');
      let i = 0;
      const masked = mask.replace(/#/g, _ => value[i++] || '');
      return masked;
    }
    
    el.addEventListener('input', e => {
      const old = e.target.value;
      const formatted = format(old);
      e.target.value = formatted;
     
      el.dispatchEvent(new Event('input'));
    });
  }
}

function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(`Calling ${propertyKey} with arguments:`, args);
      const result = originalMethod.apply(this, args);
      console.log(`Method ${propertyKey} returned:`, result);
      return result;
    };
  }
  
  class Calculator {
    @log
    add(a: number, b: number): number {
      return a + b;
    }
  }
  
  const calc = new Calculator();
  calc.add(3, 4); // Logs details before and after executing the add method

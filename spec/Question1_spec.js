import { Question1 } from '../Question1.js'

describe("A suite", function() {
    it("the temperature is", function() {
      let fahrenheit = Question1(500);
      expect(fahrenheit).toBe(440.33000000000004);
    });
  });
  
  
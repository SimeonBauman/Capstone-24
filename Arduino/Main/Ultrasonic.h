class ULS{

  private:
    int pingPin;
    int echoPin;
    float lastFive[5] = {0,0,0,0,0};
  public:

    ULS(int pingPin, int echoPin){
      this->pingPin = pingPin;
      this->echoPin = echoPin;
      pinMode(pingPin,OUTPUT);
      pinMode(echoPin,INPUT);
    }

    float getDistance(){
      float duration, inches, cm;

      digitalWrite(pingPin, LOW);
      delayMicroseconds(10);
      digitalWrite(pingPin, HIGH);
      delayMicroseconds(10);
      digitalWrite(pingPin, LOW);

      duration = pulseIn(echoPin, HIGH);
      inches = this->microsecondsToInches(duration);
  

      Serial.print(inches);
      Serial.print("in, ");
      Serial.println();

      delay(100);
      return adjustFive(inches);
    }

    float microsecondsToInches(float microseconds) {
      return microseconds / 74 / 2;
    }

    float adjustFive(float val){
      float total = val;
      for(int i = 4; i >0; i--){
       
        this->lastFive[i] = this->lastFive[i-1];
         total += this->lastFive[i];
      }
      this->lastFive[0] = val;
      return total/5;
    }
};

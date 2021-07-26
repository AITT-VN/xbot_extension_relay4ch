import machine, time
import pcf8574

class Relay4CH:
    def __init__(self):
        self._port = None
        if port < 0 or port > 5:
            say('Port not supported')
            raise ValueError

    def _reset_port(self, port, address=0x20):
        self._port = port
        # Grove port: GND VCC S2 (DIO) S1 (CLK)
        scl_pin = PORTS_DIGITAL[port][0]
        sda_pin = PORTS_DIGITAL[port][1]
        try:
            self.i2c_pcf = machine.SoftI2C(scl = scl_pin, sda = sda_pin)
            self.pcf = pcf8574.PCF8574(self.i2c_pcf, address)
        except ValueError:
            say('Relay 4 channel not found')

    def turn_on(self, port, relay_number):
        """Switch relay on.
           TODO: make sure that relay_number is valid
        """
        if port != self._port:
            self._reset_port(port)
        # set the relay_number-th bit to 0
        self.pcf.pin(relay_number, 0)

    def turn_off(self, port, relay_number):
        """Switch relay off.
           TODO: make sure that relay_number is valid
        """
        if port != self._port:
            self._reset_port(port)
        # set the relay_number-th bit to 1
        self.pcf.pin(relay_number, 1)

relay4ch = Relay4CH()

package runners;

import com.intuit.karate.junit5.Karate;

public class AgregarMascotaTest {

    @Karate.Test
    public Karate testAgregarMascota() {
        return Karate.run("features/karate/agregar-mascota.feature").relativeTo(getClass());
    }
}

using Hl7.Fhir.Model;
using Hl7.Fhir.Serialization;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => Results.Ok(new
{
    service = "Firely FHIR API",
    status = "running",
    docs = "/metadata"
}));

app.MapGet("/metadata", () =>
{
    var capability = new CapabilityStatement
    {
        Status = PublicationStatus.Active,
        Date = DateTimeOffset.UtcNow.ToString("O"),
        Kind = CapabilityStatement.CapabilityStatementKind.Instance,
        FhirVersion = FHIRVersion.N4_0_1,
        Format = new List<string> { "json" }
    };

    var serializer = new FhirJsonSerializer(new SerializerSettings { Pretty = true });
    return Results.Text(serializer.SerializeToString(capability), "application/fhir+json");
});

app.MapGet("/Patient/{id}", (string id) =>
{
    var patient = new Patient
    {
        Id = id,
        Active = true,
        Name = new List<HumanName>
        {
            new HumanName
            {
                Family = "Doe",
                Given = new[] { "John" }
            }
        },
        Gender = AdministrativeGender.Male,
        BirthDate = "1980-01-01"
    };

    var serializer = new FhirJsonSerializer(new SerializerSettings { Pretty = true });
    return Results.Text(serializer.SerializeToString(patient), "application/fhir+json");
});

app.Run();

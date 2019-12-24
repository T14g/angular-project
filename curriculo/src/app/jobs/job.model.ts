export class Job {
  public empresa: string;
  public siteEmpresa: string;
  public sitesCriados: string[];
  public description: string;
  public imagePath: string;
  public tempo: number;

  constructor(empresa: string, siteEmpresa: string, description: string, imagePath: string, tempo: number) {
    this.empresa     = empresa;
    this.siteEmpresa = siteEmpresa;
    this.description = description;
    this.imagePath   = imagePath;
    this.tempo       = tempo;
  }
}

import IParseMailTemplateDTO from '../dtos/IParseMailTramplateDTO';

export default interface IMailTemplateProvider {
  parse(data: IParseMailTemplateDTO): Promise<string>;
}

import { Container } from "inversify";
import { TYPES } from "./types";
import { Controller, Service, Provider } from "./interface/index";
import { AppController } from "./controller";
import { AppService } from "./service";
import { AppProvider } from "./provider";

const appContainer = new Container();
appContainer.bind<Service>(TYPES.Service).to(AppService);
appContainer.bind<Provider>(TYPES.Provider).to(AppProvider);
appContainer.bind<Controller>(TYPES.Controller).to(AppController);

export { appContainer };
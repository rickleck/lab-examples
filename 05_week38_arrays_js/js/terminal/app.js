import { program } from "commander";
import { Labs } from "../printer/labs/labs.js";
/*
 * App node terminal version (node js/terminal/app --lab <number>)
 */
program.option("l,--lab <number>");
program.parse();
Labs.getPrinter(program.opts().lab).print();

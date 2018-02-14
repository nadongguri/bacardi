import * as ts from "typescript";
import * as Lint from "tslint";

export class Rule extends Lint.Rules.AbstractRule {
  public static FAILURE_STRING = "should not import sub modules in other folder";

  public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
    return this.applyWithWalker(new NoImportOtherModulesWalker(sourceFile, this.getOptions()));
  }
}

// The walker takes care of all the work.
class NoImportOtherModulesWalker extends Lint.RuleWalker {
  public visitImportDeclaration(node: ts.ImportDeclaration) {
    // create a failure at the current position
    const PROJECT_STRING = "bacardi";
    const sourcePath = (node.parent as ts.SourceFile).fileName;
    const importPath = (node.moduleSpecifier as any).text as string;
    if (importPath.includes('/')) {
      let importModuleName = importPath.split('/')[0];
      let relativeSourcePath = sourcePath.split(PROJECT_STRING)[1];
      let sourceModuleName = relativeSourcePath.split('/')[1];
      if (importModuleName != sourceModuleName) {
        this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING));
      }
    }

    // call the base version of this visitor to actually parse this node
    super.visitImportDeclaration(node);
  }
}

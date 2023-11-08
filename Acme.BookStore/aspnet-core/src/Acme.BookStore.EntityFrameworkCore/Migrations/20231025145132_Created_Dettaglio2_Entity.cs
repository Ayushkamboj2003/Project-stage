using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Acme.BookStore.Migrations
{
    /// <inheritdoc />
    public partial class CreatedDettaglio2Entity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AppDettagli_AppOrdini_OrdiniId",
                table: "AppDettagli");

            migrationBuilder.DropForeignKey(
                name: "FK_AppProdotti_AppAuthors_AuthorId",
                table: "AppProdotti");

            migrationBuilder.DropIndex(
                name: "IX_AppDettagli_OrdiniId",
                table: "AppDettagli");

            migrationBuilder.DropColumn(
                name: "OrdiniId",
                table: "AppDettagli");

            migrationBuilder.RenameColumn(
                name: "AuthorId",
                table: "AppProdotti",
                newName: "OrdiniId");

            migrationBuilder.RenameIndex(
                name: "IX_AppProdotti_AuthorId",
                table: "AppProdotti",
                newName: "IX_AppProdotti_OrdiniId");

            migrationBuilder.CreateIndex(
                name: "IX_AppDettagli_ProdottiId",
                table: "AppDettagli",
                column: "ProdottiId");

            migrationBuilder.AddForeignKey(
                name: "FK_AppDettagli_AppProdotti_ProdottiId",
                table: "AppDettagli",
                column: "ProdottiId",
                principalTable: "AppProdotti",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_AppProdotti_AppOrdini_OrdiniId",
                table: "AppProdotti",
                column: "OrdiniId",
                principalTable: "AppOrdini",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AppDettagli_AppProdotti_ProdottiId",
                table: "AppDettagli");

            migrationBuilder.DropForeignKey(
                name: "FK_AppProdotti_AppOrdini_OrdiniId",
                table: "AppProdotti");

            migrationBuilder.DropIndex(
                name: "IX_AppDettagli_ProdottiId",
                table: "AppDettagli");

            migrationBuilder.RenameColumn(
                name: "OrdiniId",
                table: "AppProdotti",
                newName: "AuthorId");

            migrationBuilder.RenameIndex(
                name: "IX_AppProdotti_OrdiniId",
                table: "AppProdotti",
                newName: "IX_AppProdotti_AuthorId");

            migrationBuilder.AddColumn<Guid>(
                name: "OrdiniId",
                table: "AppDettagli",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_AppDettagli_OrdiniId",
                table: "AppDettagli",
                column: "OrdiniId");

            migrationBuilder.AddForeignKey(
                name: "FK_AppDettagli_AppOrdini_OrdiniId",
                table: "AppDettagli",
                column: "OrdiniId",
                principalTable: "AppOrdini",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_AppProdotti_AppAuthors_AuthorId",
                table: "AppProdotti",
                column: "AuthorId",
                principalTable: "AppAuthors",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}

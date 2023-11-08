using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Acme.BookStore.Migrations
{
    /// <inheritdoc />
    public partial class CreatedDettaglio1Entity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AppDettagli_AppOrdini_Id",
                table: "AppDettagli");

            migrationBuilder.DropForeignKey(
                name: "FK_AppProdotti_AppAuthors_ProdottoId",
                table: "AppProdotti");

            migrationBuilder.AddColumn<Guid>(
                name: "AuthorId",
                table: "AppProdotti",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<Guid>(
                name: "DeleterId",
                table: "AppDettagli",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeletionTime",
                table: "AppDettagli",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "AppDettagli",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<Guid>(
                name: "OrdiniId",
                table: "AppDettagli",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<Guid>(
                name: "ProdottiId",
                table: "AppDettagli",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_AppProdotti_AuthorId",
                table: "AppProdotti",
                column: "AuthorId");

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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AppDettagli_AppOrdini_OrdiniId",
                table: "AppDettagli");

            migrationBuilder.DropForeignKey(
                name: "FK_AppProdotti_AppAuthors_AuthorId",
                table: "AppProdotti");

            migrationBuilder.DropIndex(
                name: "IX_AppProdotti_AuthorId",
                table: "AppProdotti");

            migrationBuilder.DropIndex(
                name: "IX_AppDettagli_OrdiniId",
                table: "AppDettagli");

            migrationBuilder.DropColumn(
                name: "AuthorId",
                table: "AppProdotti");

            migrationBuilder.DropColumn(
                name: "DeleterId",
                table: "AppDettagli");

            migrationBuilder.DropColumn(
                name: "DeletionTime",
                table: "AppDettagli");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "AppDettagli");

            migrationBuilder.DropColumn(
                name: "OrdiniId",
                table: "AppDettagli");

            migrationBuilder.DropColumn(
                name: "ProdottiId",
                table: "AppDettagli");

            migrationBuilder.AddForeignKey(
                name: "FK_AppDettagli_AppOrdini_Id",
                table: "AppDettagli",
                column: "Id",
                principalTable: "AppOrdini",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_AppProdotti_AppAuthors_ProdottoId",
                table: "AppProdotti",
                column: "Id",
                principalTable: "AppAuthors",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
